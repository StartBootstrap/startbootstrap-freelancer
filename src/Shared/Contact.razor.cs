using Microsoft.AspNetCore.Components;
using StartBootstrap.Freelancer.Blazor.Models;
using System;
using System.Net;
using System.Net.Mail;

namespace StartBootstrap.Freelancer.Blazor.Shared
{
    public class ContactBase : ComponentBase
    {
        protected ContactForm ContactForm = new ContactForm();

        protected void HandleValidSubmit()
        {
            ContactForm.Success = null;
            ContactForm.Error = null;
            try
            {
                SmtpClient client = new SmtpClient("mysmtpserver");
                client.UseDefaultCredentials = false;
                client.Credentials = new NetworkCredential("username", "password");

                MailMessage mailMessage = new MailMessage();
                mailMessage.From = new MailAddress(ContactForm.Email);
                mailMessage.To.Add("receiver@me.com");
                mailMessage.Body = ContactForm.Message + $"<br />Phone: {ContactForm.Phone}";
                mailMessage.Subject = $"Message from {ContactForm.Name}";
                client.Send(mailMessage);
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
