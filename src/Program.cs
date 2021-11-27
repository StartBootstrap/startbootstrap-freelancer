using Kentico.Kontent.Delivery.Abstractions;
using Kentico.Kontent.Delivery.Extensions;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.AspNetCore.Components.Web;
using SendGrid.Extensions.DependencyInjection;
using StartBootstrap.Freelancer.Blazor.Models;

namespace StartBootstrap.Freelancer.Blazor
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");
            builder.RootComponents.Add<HeadOutlet>("head::after");

            builder.Services.AddDeliveryClient(builder.Configuration.Build());

            builder.Services.AddSingleton<ITypeProvider, CustomTypeProvider>();

            builder.Services.AddSendGrid(o =>
            {
                o.ApiKey = "<YOUR_API_KEY>";
            });

            builder.Services.AddHttpClient();

            await builder.Build().RunAsync();
        }
    }
}
