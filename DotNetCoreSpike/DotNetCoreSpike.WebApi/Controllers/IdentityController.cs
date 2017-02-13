using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DotNetCoreSpike.WebApi.Controllers
{
    [Route("identity")]
    [Authorize]
    public class IdentityController : Controller
    {
        [Authorize]
        [HttpGet]
        public IActionResult GetMe()
        {
            return new JsonResult(from c in User.Claims select new { c.Type, c.Value });
        }
    }
}
