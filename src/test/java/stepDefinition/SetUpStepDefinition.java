package stepDefinition;

import java.sql.Time;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SetUpStepDefinition {

	WebDriver driver;


	@Given("^user is already on Login Page$")
	public void user_is_already_on_Login_Page()  {

		System.setProperty("webdriver.chrome.driver","D:\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");

		driver.manage().window().maximize();
	}

	@When("^title of login page is orangehrm$")
	public void title_of_login_page_is_orangehrm()  {
		System.out.println(driver.getTitle());
	}

	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters_username_and_password(String username, String password){

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id='txtUsername']")).sendKeys(username);
		driver.findElement(By.xpath("//*[@id='txtPassword']")).sendKeys(password);

	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[@id='btnLogin']")).click();
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {

		System.out.println(driver.getTitle());
	}

	@Then("^Close the browser$")
	public void close_the_browser()  {

		driver.close();
	}


}
