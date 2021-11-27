using Microsoft.AspNetCore.Components;
using SendGrid;
using SendGrid.Helpers.Mail;
using StartBootstrap.Freelancer.Blazor.Models;

namespace StartBootstrap.Freelancer.Blazor.Shared
{
    public class ContactBase : ComponentBase
    {
        protected ContactForm ContactForm = new();

        [Inject]
        private ISendGridClient Client { get; set; }


        public ContactBase()
        {
        }

        protected async Task HandleValidSubmit()
        {
            ContactForm.Success = null;
            ContactForm.Error = null;
            try
            {
                // Compose a message
                var msg = new SendGridMessage()
                {
                    From = new EmailAddress(ContactForm.Email),
                    Subject = $"Message from {ContactForm.Name}"
                };
                msg.AddContent(MimeType.Html, $"{ContactForm.Message}{$"<br />Phone: {ContactForm.Phone}"}");
                msg.AddTo(new EmailAddress("receiver@me.com"));

                // Send the message
                var response = await Client.SendEmailAsync(msg);

                // Display status
                ContactForm.Success = "Message sent!";
            }
            catch (Exception ex)
            {
                ContactForm.Error = ex.Message;
            }
            StateHasChanged();
        }

    }
}
