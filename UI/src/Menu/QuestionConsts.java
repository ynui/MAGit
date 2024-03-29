package Menu;

public class QuestionConsts {
    public static String ASK_COMMIT = "The current repository is not in \"Clean State\" right now\n" +
            "If you checkout without commiting your changes since yhe last commit will be lost forever.\n" +
            "Do you want to commit before the checkout?";
    public static String YES_NO = "Choose Y/N";
    public static String ASK_CHECKOUT = "Do you want to checkout for the new branch?";
    public static String ASK_XML_OVERRIDE = "The location generated from XML already contains MAGit repository.\n" +
            "Do you want to override it? Otherwise XML load will be terminated and you will be moved to that repository";

}
