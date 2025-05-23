import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int M = sc.nextInt();
        int[] nums = new int[N];
        for (int i = 0; i < N; i++) {
            nums[i] = sc.nextInt();
        }
        // Please write your code here.
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for(int i : nums)
            pq.add(-i);

        while(M-- > 0) {
            int val = -pq.poll();
            pq.add(-(val-1));
        }

        System.out.println(-pq.poll());
    }
}