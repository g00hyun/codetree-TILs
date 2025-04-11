import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        // Please write your code here.
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        
        for(int i = 0; i<n; i++) {
            String command = sc.next();
            int val;

            if(command.equals("push")) {
                val = sc.nextInt();
                pq.add(-val);
            }
            else if(command.equals("pop"))
                System.out.println(-pq.poll());
            else if(command.equals("size"))
                System.out.println(pq.size());
            else if(command.equals("empty"))
                System.out.println(pq.isEmpty() ? 1 : 0);
            else if(command.equals("top"))
                System.out.println(-pq.peek());

        }
    }
}