import java.util.*;
import java.io.*;
public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        String[] arr = br.readLine().split(" ");

        int[] prefixSum = new int[n];
        prefixSum[n-1] = Integer.parseInt(arr[n-1]);
        for(int i = n-2; i >= 0; i--)
            prefixSum[i] = Integer.parseInt(arr[i]) + prefixSum[i+1];
        // Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();
        // int[] arr = new int[n];
        // for(int i = 0; i < n; i++)
        //     arr[i] = sc.nextInt();
        // Please write your code here.
        double maxAvg = -1;
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(Integer.parseInt(arr[n-1]));

        for(int i = n-2; i>0; i--) {
            pq.add(Integer.parseInt(arr[i]));

            int sum = prefixSum[i];
            int min = pq.poll();
            pq.add(min);

            maxAvg = Math.max(maxAvg, (double)(sum - min) / (n-i-1));
        }

        String result = String.format("%.2f", maxAvg);
        System.out.println(result);
    }
}