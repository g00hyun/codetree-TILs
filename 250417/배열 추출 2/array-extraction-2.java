import java.util.*;

class Single implements Comparable<Single> {
    int num;

    Single(int num) {
        this.num = num;
    }

    @Override
    public int compareTo(Single s) {
        if(Math.abs(this.num) == Math.abs(s.num))
            return this.num - s.num;
        return Math.abs(this.num) - Math.abs(s.num);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        PriorityQueue<Single> pq = new PriorityQueue<>();
        // Please write your code here.
        for (int i = 0; i < n; i++) {
            int x = sc.nextInt();
            // Please write your code here.
            if(x == 0) {
                if(pq.size() > 0)
                    System.out.println(pq.poll().num);
                else
                    System.out.println(0);
            }
            else {
                pq.add(new Single(x));
            }
        }
    }
}