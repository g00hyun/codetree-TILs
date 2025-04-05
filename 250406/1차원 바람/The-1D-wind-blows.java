import java.util.*;

class Command {
    int rowNum;
    int dir;

    public Command(int rowNum, int dir) {
        this.rowNum = rowNum;
        this.dir = dir;
    }
}

public class Main {
    static int n,m,q;
    static int[][] a;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();
        q = sc.nextInt();
        a = new int[n][m];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                a[i][j] = sc.nextInt();
        ArrayList<Command> commands = new ArrayList<>();
        for (int i = 0; i < q; i++) {
            int r = sc.nextInt();
            char d = sc.next().charAt(0);

            commands.add(new Command(r,d=='L' ? 1 : -1));
        }
        // Please write your code here.
        
        while(q-- > 0) {
            Command c = commands.get(0);
            commands.remove(0);

            // 현재 위치 전파
            moving(c.rowNum - 1, c.dir);

            // 위로 재귀
            movingUpRecursive(c.rowNum-2, c.dir * -1);

            // 아래로 재귀
            movingDownRecursive(c.rowNum, c.dir * -1);
        }

        for(int[] list : a) {
            for(int i : list)
                System.out.print(i + " ");
            System.out.println();
        }
    }

    static void moving(int r, int d) {
        // d 방향대로 이동
        if(d == 1) {
            int temp = a[r][m-1];
            for(int i = m-1; i>0; i--)
                a[r][i] = a[r][i-1];
            a[r][0] = temp;
        }
        else {
            int temp = a[r][0];
            for(int i = 0; i<m-1; i++)
                a[r][i] = a[r][i+1];
            a[r][m-1] = temp;
        }
    }

    static void movingUpRecursive(int r, int d) {
        // 범위 확인 && 전파가능여부 확인(전파 원인 줄과)
        if(!(InRange(r) && CanMove(a[r], a[r+1])))
            return;
        
        // d 방향대로 이동
        moving(r,d);
        movingUpRecursive(r-1, d * -1);
    }

    static void movingDownRecursive(int r, int d) {
        // 범위 확인 && 전파가능여부 확인(전파 원인 줄과)
        if(!(InRange(r) && CanMove(a[r], a[r-1])))
            return;

        // d 방향대로 이동
        moving(r,d);
        movingDownRecursive(r+1, d * -1);
    }

    static boolean InRange(int r) {
        return 0 <= r && r < n;
    }

    static boolean CanMove(int[] now, int[] prev) {
        for(int i = 0; i<m; i++)
            if(now[i] == prev[i])
                return true;
        return false;
    }

}