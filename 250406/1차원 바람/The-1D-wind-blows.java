import java.util.*;

class Command {
    int rowNum;
    char dir;

    public Command(int rowNum, char dir) {
        this.rowNum = rowNum;
        this.dir = dir;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int q = sc.nextInt();
        int[][] a = new int[n][m];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                a[i][j] = sc.nextInt();
        ArrayList<Command> commands = new ArrayList<>();
        for (int i = 0; i < q; i++) {
            int r = sc.nextInt();
            char d = sc.next().charAt(0);

            commands.add(new Command(r,d));
        }
        // Please write your code here.
        
        // for(Command c : commands)
        //     System.out.println(c.rowNum + " " + c.dir);
        while(q--) {
            int command = commands.get(0);
        }
    }
}