using Kentico.Kontent.Delivery.Abstractions;
using Kentico.Kontent.Delivery.Extensions;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using StartBootstrap.Freelancer.Blazor.Models;
using System.Net.Http;
using System.Threading.Tasks;

namespace StartBootstrap.Freelancer.Blazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");

            builder.Services.AddDeliveryClient(builder.Configuration.Build());

            builder.Services.AddSingleton<ITypeProvider, CustomTypeProvider>();

            builder.Services.AddTransient(sp => new HttpClient());

            await builder.Build().RunAsync();
        }
    }
}
