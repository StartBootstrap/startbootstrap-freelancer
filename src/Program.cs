using Kentico.Kontent.Delivery.Abstractions;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using StartBootstrap.Freelancer.Blazor.Models;
using System;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Reflection;

namespace StartBootstrap.Freelancer.Blazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("app");

            builder.Services.AddSingleton<ITypeProvider, CustomTypeProvider>();

            builder.Services.AddTransient(sp => new HttpClient());

            await builder.Build().RunAsync();
        }
    }
}
