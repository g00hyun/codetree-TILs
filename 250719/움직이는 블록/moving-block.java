import java.util.*;
import java.lang.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] blocks = new int[n];
        for (int i = 0; i < n; i++) {
            blocks[i] = sc.nextInt();
        }
        // Please write your code here.
        int avg = calAvg(blocks);
        
        int allMoveCnt = 0;
        for(int i : blocks)
            allMoveCnt += diff(avg, i);
        
        System.out.println(allMoveCnt/2);
    }

    static int calAvg(int[] blocks) {
        int sum = 0;
        for(int i : blocks)
            sum += i;
        return sum / blocks.length;
    }

    static int diff(int a, int b) {
        return a > b ? a - b : b - a;
    }
}