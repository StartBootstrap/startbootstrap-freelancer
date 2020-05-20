using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace StartBootstrap.Freelancer.Blazor.Shared
{
    public class NavMenuBase : ComponentBase
    {
        [Inject]
        private IJSRuntime JSRuntime { get; set; }

        protected override Task OnAfterRenderAsync(bool firstRender)
        {
            JSRuntime.InvokeAsync<object>("initNavMenu");
            return base.OnAfterRenderAsync(firstRender);
        }
    }
}
