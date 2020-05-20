using System.ComponentModel.DataAnnotations;

namespace StartBootstrap.Freelancer.Blazor.Models
{
    public class ContactForm
    {
        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        public string Phone { get; set; }

        [Required]
        public string Message { get; set; }

        public string Success { get; set; }

        public string Error { get; set; }
    }
}
