namespace StartBootstrap.Freelancer.Blazor.Models
{
    public partial class Home
    {
        public IEnumerable<PortfolioItem> PortfolioItemsTyped => PortfolioItems?.Cast<PortfolioItem>();
        public IEnumerable<NavigationItem> NavigationItemsTyped => Navigation?.Cast<NavigationItem>();
        public IEnumerable<FontAwesomeLink> FooterMiddleColumnLinksTyped => FooterMiddleColumnLinks?.Cast<FontAwesomeLink>();
        public IEnumerable<FontAwesomeLink> AboutButtonTyped => AboutButton?.Cast<FontAwesomeLink>();
    }
}