package Runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\resources\\Feature\\united.feature", glue = {"Stepdefinition"}, format = {"pretty", "html:target/cucumber"}, tags = "@Smoke")


public class Scrumrunner {

}
