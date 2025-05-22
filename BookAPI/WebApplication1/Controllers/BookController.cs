using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using bookAPI.Models;  // Updated namespace reference

namespace bookAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        // Define Book class here if needed
        public class Book
        {
            public int Id { get; set; }
            public string Title { get; set; }
            public string Author { get; set; }
        }
        
        private static List<Book> _books = new List<Book>
        {
            new Book { Id = 1, Title = "The Great Gatsby", Author = "F. Scott Fitzgerald" },
            new Book { Id = 2, Title = "To Kill a Mockingbird", Author = "Harper Lee" },
            new Book { Id = 3, Title = "1984", Author = "George Orwell" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Book>> GetAll()
        {
            return _books;
        }

        [HttpGet("{id}")]
        public ActionResult<Book> GetById(int id)
        {
            var book = _books.Find(b => b.Id == id);
            if (book == null)
                return NotFound();

            return book;
        }
    }
}
