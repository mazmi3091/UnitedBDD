package Util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class Lib {
	
	public static String getTitle(WebDriver driver) {
		String title = driver.getTitle();
		return title;
	}
	
	public static WebElement findElem(WebDriver driver, String xpath) {
		WebElement elem = driver.findElement(By.xpath(xpath));
		return elem;
	}
	
	public static String readProperty(String key) throws IOException {
		File file = new File("D:\\Google Drive\\PIIT\\Selenium\\Java\\UnitedBDD\\locator.property");
		FileInputStream fis = new FileInputStream(file);
		Properties prop = new Properties();
		prop.load(fis);
		String locator = prop.getProperty(key);
		return locator;
	}
}
