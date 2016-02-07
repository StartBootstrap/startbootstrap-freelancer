__author__ = 'terry'
import boto

import boto
import boto.s3
import os.path
import sys
from boto.s3.key import Key


# Fill these in - you get them when you sign up for S3
AWS_ACCESS_KEY_ID = 'AKIAJ55GGPKYFEXJIZ7Q'
AWS_ACCESS_KEY_SECRET = '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'
AWS_REGION = 'us-east-1'

bucket_name = 'hlbsa.org'
# source directory
sourceDir = '/Users/terry/hlbsa/startbootstrap-freelancer/'
# destination directory name (on s3)
destDir = ''

#max size in bytes before uploading in parts. between 1 and 5 GB recommended
MAX_SIZE = 20 * 1000 * 1000
#size of parts when uploading in parts
PART_SIZE = 6 * 1000 * 1000

from boto3.session import Session

AWS_SESSION = Session(aws_access_key_id=AWS_ACCESS_KEY_ID,
                      aws_secret_access_key=AWS_ACCESS_KEY_SECRET,
                      region_name=AWS_REGION)

s3 = AWS_SESSION.resource('s3')
bucket = s3.Bucket(bucket_name)

s3.Object(bucket_name, 'index.html').put(Body=open('./index.html', 'rb'));
exit()


uploadFileNames = []
for (sourceDir, dirname, filename) in os.walk(sourceDir):
    print sourceDir
    print filename
    print dirname

    uploadFileNames.extend(filename)
    break

def percent_cb(complete, total):
    sys.stdout.write('.')
    sys.stdout.flush()

for filename in uploadFileNames:
    sourcepath = os.path.join(sourceDir + filename)
    destpath = os.path.join(destDir, filename)
    print 'Uploading %s to Amazon S3 bucket %s' % \
           (sourcepath, bucket_name)

    filesize = os.path.getsize(sourcepath)
    if filesize > MAX_SIZE:
        print "multipart upload"
        mp = bucket.initiate_multipart_upload(destpath)
        fp = open(sourcepath,'rb')
        fp_num = 0
        while (fp.tell() < filesize):
            fp_num += 1
            print "uploading part %i" %fp_num
            mp.upload_part_from_file(fp, fp_num, cb=percent_cb, num_cb=10, size=PART_SIZE)

        mp.complete_upload()

    else:
        pass
        #print "singlepart upload"
        #k = boto.s3.key.Key(bucket)
        #k.key = destpath
        #exit()
        #k.set_contents_from_filename(sourcepath,cb=percent_cb, num_cb=10)
