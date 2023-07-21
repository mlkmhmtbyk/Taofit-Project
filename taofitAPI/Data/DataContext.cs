using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using taofitAPI.Data.Models;

namespace taofitAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){ }
        
        public DbSet<Meal> Meals { get; set; }
        public DbSet<Food> Foods { get; set; }
    }
}