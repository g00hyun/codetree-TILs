import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int[] arr = new int[N];
        for (int i = 0; i < N; i++) {
            arr[i] = sc.nextInt();
        }
        // Please write your code here.

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int i = 0; i<N; i++) {
            pq.add(arr[i]);
            if(i < 2) {
                System.out.println(-1);
                continue;
            }

            int a = pq.poll();
            int b = pq.poll();
            int c = pq.poll();

            pq.add(a);
            pq.add(b);
            pq.add(c);

            System.out.println((long)a*b*c);
        }
    }
}