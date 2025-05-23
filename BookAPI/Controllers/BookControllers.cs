using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WebApplication1.Modules;

namespace BookAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
       private book[] _books = new Book[]
       {

        new book{ID = 1, Author = "Author One", Title = "Book One"},
        new book{ID = 2, Author = "Author Two", Title = "Book Two"},
        new book{ID = 3, Author = "Author Three", Title = "Book Three"}
       
       };

       [HttpGet]
       public ActionResult<IEnumerable<book>> GetBooks()
       {
        return Ok(_books);
       }

    }

}