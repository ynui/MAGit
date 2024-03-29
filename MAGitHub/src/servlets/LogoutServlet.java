package servlets;

import UserManager.User;
import utils.SessionUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LogoutServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        UserManager userManager = ServletUtils.getUserManager(getServletContext());
//        userManager.removeUser(SessionUtils.getUsername(request));
        User user = SessionUtils.getUser(request);
        if (user != null) {
            user.getMessagesRead().addAll(user.getMessagesUnread());
            user.getMessagesUnread().clear();
        }
        SessionUtils.clearSession(request);
    }
}
