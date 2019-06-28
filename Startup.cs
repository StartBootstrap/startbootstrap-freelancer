using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;
using KenticoCloud.Delivery;
using StartBootstrap.Freelancer.Blazor.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Linq;
using System.IO;

namespace StartBootstrap.Freelancer.Blazor
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<ITypeProvider, CustomTypeProvider>();

            services.AddSingleton((s) =>
            {
                return GetConfiguration();
            });
        }

        private IConfiguration GetConfiguration()
        {
            System.Reflection.Assembly assembly = GetType().Assembly;
            var resource = assembly.GetName().Name + ".Configuration.appsettings.json";
            ConfigurationBuilder configurationBuilder = new ConfigurationBuilder();

            if (assembly.GetManifestResourceNames().Contains(resource))
            {
                string result = null;
                using (Stream stream = assembly.GetManifestResourceStream(resource))
                using (StreamReader reader = new StreamReader(stream))
                {
                    result = reader.ReadToEnd();
                }

                configurationBuilder.AddJsonFile(new InMemoryFileProvider(result), resource, false, false);
            }

            return configurationBuilder.Build();
        }


        public void Configure(IComponentsApplicationBuilder app)
        {
            app.AddComponent<App>("app");
        }
    }
}
