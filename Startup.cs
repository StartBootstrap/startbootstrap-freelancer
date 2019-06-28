using Microsoft.AspNetCore.Components.Builder;
using Microsoft.Extensions.DependencyInjection;
using KenticoCloud.Delivery;
using StartBootstrap.Freelancer.Blazor.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
using System;

namespace StartBootstrap.Freelancer.Blazor
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
           // services.AddSingleton<ITypeProvider, CustomTypeProvider>();

            //var configuration = new ConfigurationBuilder()
            //            .AddJsonFile("appsettings.json", true)
            //            .Build();

            //// Fill the DI container
            //services.Configure<DeliveryOptions>(configuration);
            //services.AddDeliveryClient(configuration);

            //TODO configuration
           // var client = DeliveryClientBuilder.WithProjectId("a9b221f5-7375-01af-4d91-67a87cb4e991").WithTypeProvider(new CustomTypeProvider()).Build();

            //services.AddSingleton<IDeliveryClient>(client);
            
        }

        public void Configure(IComponentsApplicationBuilder app)
        {            
            app.AddComponent<App>("app");
        }
    }
}
