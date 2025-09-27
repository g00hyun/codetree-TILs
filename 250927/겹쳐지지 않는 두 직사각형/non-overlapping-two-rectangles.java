import java.util.*;
import java.io.*;

public class Main {
    static int n,m;
    static int[][] map;
    static Square first;
    static Square second;
    static int maxSum = Integer.MIN_VALUE;

    public static void main(String[] args) throws IOException{
        // Please write your code here.
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] line = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        n = line[0]; m = line[1];

        map = new int[n][n];
        for(int i = 0; i<n; i++)
            map[i] = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        getFirstSquare();

        print(maxSum + "");
    }

    private static void getFirstSquare() {
        for(int sx = 0; sx < n; sx++)
            for(int sy = 0; sy < n; sy++)
                for(int ex = sx+1; ex < n+1; ex++)
                    for(int ey = sy+1; ey < n+1; ey++) {
                        first = new Square(sx,sy,ex,ey);
                        getSecondSquare();
                    }
    }

    private static void getSecondSquare() {
        for(int sx = 0; sx < n; sx++)
            for(int sy = 0; sy < n; sy++)
                for(int ex = sx+1; ex < n+1; ex++)
                    for(int ey = sy+1; ey < n+1; ey++) {
                        second = new Square(sx,sy,ex,ey);
                        if(canCalc()) maxSum = Math.max(maxSum, calc());
                    }
    }

    private static boolean canCalc() {
        // first와 second가 겹치는지 확인
        return !first.overlapBy(second);
    }

    private static int calc() {
        // first와 second의 합
        // print("[first's data] => (" + first.sx + "," + first.ex + ") ~ (" + first.sy + "," + first.ey + ")\n");
        // print("[second's data] => (" + second.sx + "," + second.ex + ") ~ (" + second.sy + "," + second.ey + ")\n");
        // print("\n");

        return first.getAreaValues(map) + second.getAreaValues(map);
    }

    private static void print(String s) {
        System.out.print(s);
    }
}

class Square {
    int sx,sy,ex,ey;

    Square(int sx, int sy, int ex, int ey) {
        this.sx = sx;
        this.sy = sy;
        this.ex = ex;
        this.ey = ey;
    }

    boolean overlapBy(Square other) {
        if(this.ex > other.sx && this.ey > other.sy) return true;
        // if(this.sx < other.ex && this.sy < other.ey) return true;

        return false;
    }

    int getAreaValues(int[][] map) {
        int sum = 0;
        for(int i = this.sx; i < this.ex; i++)
            for(int j = this.sy; j < this.ey; j++)
                sum += map[i][j];
        return sum;
    }
}