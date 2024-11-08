function skillsMember()
{
    var skills = ["HTML", "CSS", "JavaScript", "React"];
    var result = "";
    for (var i = 0; i < skills.length; i++) {
        result += "I know " + skills[i] + "\n";
    }
    return result;
}