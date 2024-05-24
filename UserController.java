import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @GetMapping("/user")
    @ResponseBody
    public String user(@AuthenticationPrincipal OAuth2User principal) {
        return "Welcome, " + principal.getAttribute("name");
    }
}
