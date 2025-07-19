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
        int result = 0;
        while(!isFinish(blocks)) {
            step(blocks);
            result++;
        }

        System.out.println(result);
    }

    static boolean isFinish(int[] blocks) {
        int target = blocks[0];        
        for (int i = 1; i<blocks.length; i++) 
            if(target != blocks[i])
                return false;
        return true;
    }

    static void step(int[] blocks) {
        int maxIdx = 0, minIdx = 0;

        for(int i = 1; i<blocks.length; i++) {
            if(blocks[maxIdx] < blocks[i])
                maxIdx = i;
            if(blocks[minIdx] > blocks[i])
                minIdx = i;
        }

        blocks[maxIdx]--;
        blocks[minIdx]++;
    }
}