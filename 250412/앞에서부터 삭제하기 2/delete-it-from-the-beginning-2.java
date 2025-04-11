import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        // Please write your code here.
        double maxAvg = -1;
        for(int i = 1; i<=n-2; i++) {
            PriorityQueue<Integer> pq = new PriorityQueue<>();
            for(int j = i; j<n; j++) {
                pq.add(arr[j]);
            }
            pq.poll();

            int sum = 0;
            for(int val : pq)
                sum += val;

            maxAvg = Math.max(maxAvg, sum / (n-i-1));
        }

        String result = String.format("%.2f", maxAvg);
        System.out.println(result);
    }
}