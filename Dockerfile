FROM php:apache
RUN mv "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"
COPY mail/ /var/www/html/mail/
COPY dist/ /var/www/html/dist/
COPY favicon.ico /var/www/html/
COPY index.html /var/www/html/