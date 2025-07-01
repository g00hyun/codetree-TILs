import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] grid = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                grid[i][j] = sc.nextInt();
            }
        }
        // Please write your code here.

        int result = -1;
        for(int i = 0; i<n-2; i++)
            for(int j = 0; j<n-2; j++) {
                int search = coinIn33(i,j,grid);
                result = Math.max(result, search);
            }

        System.out.println(result);
    }

    public static int coinIn33(int x, int y, int[][] grid) {
        int count = 0;
        for(int i = x; i<=x+2; i++)
            for(int j = y; j<=y+2; j++)
                if(grid[i][j] == 1) count++;

        return count;
    }
}