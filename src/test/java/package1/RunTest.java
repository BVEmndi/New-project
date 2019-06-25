package package1;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Dell on 30-03-2015.
 */


 @RunWith(Cucumber.class)
@Cucumber.Options( format={"pretty","html:target/cucumber" },
        tags ="@login")
 public class RunTest {
}
