import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- > 0) {
            PriorityQueue<Integer> maxpq = new PriorityQueue<>();
            PriorityQueue<Integer> minpq = new PriorityQueue<>();
            int m = sc.nextInt();
            int[] arr = new int[m];
            for(int i = 0; i < m; i++)
                arr[i] = sc.nextInt();
            // Please write your code here.

            maxpq.add(-arr[0]);
            System.out.print(arr[0] + " ");
            minpq.add(arr[1]);

            for(int i = 2; i<m; i++) {
                if(maxpq.size() == minpq.size())
                    maxpq.add(-arr[i]);
                else
                    minpq.add(arr[i]);

                if(-maxpq.peek() > minpq.peek()) {
                    int max = -maxpq.poll();
                    int min = minpq.poll();

                    maxpq.add(-min);
                    minpq.add(max);
                }

                if(i % 2 == 0) {
                    System.out.print(-maxpq.peek() + " ");
                }
            }
            System.out.println();
        }
    }
}