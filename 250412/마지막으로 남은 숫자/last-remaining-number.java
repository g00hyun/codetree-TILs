import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        // Please write your code here.
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for(int i : arr)
            pq.add(-i);
        
        while(pq.size() >= 2) {
            int a = -pq.poll();
            int b = -pq.poll();

            if(a-b == 0) continue;

            pq.add(-(a-b));
        }

        if(pq.isEmpty()) System.out.println(-1);
        else System.out.println(-pq.poll());
    }
}