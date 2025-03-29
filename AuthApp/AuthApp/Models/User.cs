using AuthApp.Models;  
using AuthApp.Data;  
using Microsoft.AspNetCore.Identity;  
using Microsoft.EntityFrameworkCore;  
using Microsoft.AspNetCore.Authentication.JwtBearer;  
using Microsoft.IdentityModel.Tokens;  
using System.Text;


using Microsoft.AspNetCore.Identity;

namespace AuthApp.Models
{
    public class User : IdentityUser
    {
    }
}
