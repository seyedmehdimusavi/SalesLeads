using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SalesLeadsAPI.Models;

namespace SalesLeadsAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class SalesLeadsController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> PostSalesLead([FromBody] SalesLead lead)
        {
            if (lead == null || string.IsNullOrEmpty(lead.Name) || string.IsNullOrEmpty(lead.Phone))
            {
                return BadRequest("Invalid sales lead data.");
            }

            // Simulate saving to database
            await Task.Delay(100); // Simulating async database operation

            return Ok("Lead submitted successfully!");
        }
    }
}