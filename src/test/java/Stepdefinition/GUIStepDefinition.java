package Stepdefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import Util.Lib;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class GUIStepDefinition extends Lib {
	public static WebDriver driver;

	@Before
	public void initialize() {
		String os = System.getProperty("os.name").toLowerCase();
		if (os.contains("mac")) {
			System.out.println("Running on a Mac System");
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "/Drivers/Mac/chromedriver");
		} else if (os.contains("windows")){
			System.out.println("Running on Windows PC");
			System.setProperty("webdriver.chrome.driver",
					"D:\\Google Drive\\PIIT\\Selenium\\Java\\UnitedBDD\\chromedriver.exe");
		}
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.get("https://www.united.com/ual/en/us/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("^Users are on united home page$")
	public void home() {
		System.out.println("This is the first step");
	}

	@Then("^User enters depart flight \"([^\"]*)\"$")
	public void departFlight(String a) throws InterruptedException, IOException {
		WebElement iad = findElem(driver, readProperty("iad"));
		iad.sendKeys(a);
		Thread.sleep(1000);
		WebElement iadClick = findElem(driver, readProperty("iadClick"));
		iadClick.click();
		Thread.sleep(1000);
	}

	@Then("^User enters return flight \"([^\"]*)\"$")
	public void returnFlight(String a) throws InterruptedException, IOException {
		WebElement bos = findElem(driver, readProperty("bos"));
		bos.sendKeys(a);
		Thread.sleep(1000);
		WebElement bosClick = findElem(driver, readProperty("bosClick"));
		bosClick.click();
		Thread.sleep(1000);
	}

	@Then("^User selects depart date \"([^\"]*)\"$")
	public void depDate(String a) throws InterruptedException, IOException {
		WebElement depdate = findElem(driver, readProperty("depDate"));
		depdate.sendKeys(a);
		Thread.sleep(1000);
	}

	@Then("^User selects return date \"([^\"]*)\"$")
	public void retDate(String a) throws InterruptedException, IOException {
		WebElement retdate = findElem(driver, readProperty("retDate"));
		retdate.sendKeys(a);
		Thread.sleep(1000);
		WebElement nonstop = findElem(driver, readProperty("nonstop"));
		nonstop.click();
		nonstop.click();
		Thread.sleep(1000);
	}

	@Then("^Click search button$")
	public void searchButton() throws InterruptedException, IOException {
		WebElement searchButton = findElem(driver, readProperty("searchButton"));
		searchButton.click();
		Thread.sleep(6000);
	}

	@Then("^Select economy depart flight$")
	public void firstFlight() throws InterruptedException, IOException {
		WebElement firstFlight = findElem(driver, readProperty("firstFlight"));
		firstFlight.click();
		Thread.sleep(6000);
	}

	@Then("^Select economy return flight$")
	public void secondFlight() throws InterruptedException, IOException {
		WebElement secondFlight = findElem(driver, readProperty("secondFlight"));
		secondFlight.click();
		Thread.sleep(6000);
	}

	@Then("^Close popup box$")
	public void popupBox() throws InterruptedException, IOException {
		WebElement popup = findElem(driver, readProperty("popup"));
		popup.click();
		Thread.sleep(1000);
	}

	@Then("^Print out price$")
	public void printPrice() throws InterruptedException, IOException {
		WebElement total = findElem(driver, readProperty("total"));
		WebElement price = findElem(driver, readProperty("price"));
		System.out.println(total.getText() + " Price: " + price.getText());
		Thread.sleep(1000);
	}

	@After
	public void teardown() {

	}
}
