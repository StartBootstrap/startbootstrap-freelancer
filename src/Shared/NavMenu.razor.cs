using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace StartBootstrap.Freelancer.Blazor.Shared
{
    public class NavMenuBase : ComponentBase
    {
        [Inject]
        private IJSRuntime JSRuntime { get; set; }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await JSRuntime.InvokeAsync<object>("initNavMenu");
            await base.OnAfterRenderAsync(firstRender);
        }
    }
}
