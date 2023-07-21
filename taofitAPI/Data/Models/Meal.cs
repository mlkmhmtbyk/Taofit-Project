using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace taofitAPI.Data.Models
{
    public class Meal
    {
        public int MealId { get; set; }
        public string MealName { get; set; }
        public DateTime Time { get; set; } = DateTime.Now;

        public List<Food>? Foods { get; set; }
    }
}