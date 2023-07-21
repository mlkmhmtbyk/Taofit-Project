using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace taofitAPI.Migrations
{
    public partial class fatcarbproteinadded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Calory",
                table: "Foods",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "Carbs",
                table: "Foods",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Fat",
                table: "Foods",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Protein",
                table: "Foods",
                type: "int",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Carbs",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "Fat",
                table: "Foods");

            migrationBuilder.DropColumn(
                name: "Protein",
                table: "Foods");

            migrationBuilder.AlterColumn<int>(
                name: "Calory",
                table: "Foods",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
