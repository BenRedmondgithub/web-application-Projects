using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;

namespace bookAPI 
{

    public class Program 
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(); // Added SwaggerGen service

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger(); // Enable middleware to serve generated Swagger as a JSON endpoint.
                app.UseSwaggerUI(); // Enable middleware to serve Swagger-UI (HTML, JS, CSS, etc.),
                                    // specifying the Swagger JSON endpoint.
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();

            app.MapControllers();

            app.MapGet("/", () => 
            {
                return Results.Redirect("/api/books");
            });

            app.Run();
        }
    }

}