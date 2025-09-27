import java.util.*;
import java.io.*;

public class Main {
    static int n,m;
    static int[][] map;
    static int answer;

    public static void main(String[] args) throws IOException {
        // Please write your code here.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        n = line[0]; m = line[1];
        map = new int[n][n];
        for(int i = 0; i<n; i++)
            map[i] = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        answer = 0;
        for(int i = 0; i<n; i++) {
            if(row(i)) answer++;
            if(col(i)) answer++;
        }
        print(answer+"");
    }

    private static boolean row(int x) {
        int maxSeq = 1;
        int curSeq = 1;
        
        for(int y = 1; y<n; y++) {
            if(map[x][y-1] == map[x][y]) curSeq++;
            else curSeq = 1;
            maxSeq = Math.max(maxSeq, curSeq);
        }

        return maxSeq >= m;
    }

    private static boolean col(int y) {
        int maxSeq = 1;
        int curSeq = 1;
        
        for(int x = 1; x<n; x++) {
            if(map[x-1][y] == map[x][y]) curSeq++;
            else curSeq = 1;
            maxSeq = Math.max(maxSeq, curSeq);
        }

        return maxSeq >= m;
    }

    private static void print(String s) {
        System.out.print(s);
    }
}