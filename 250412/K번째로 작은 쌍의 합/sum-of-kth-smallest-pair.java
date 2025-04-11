import java.util.*;

class Pair implements Comparable<Pair> {
    int a,b;

    Pair(int a, int b) {
        this.a = a;
        this.b = b;
    }

    @Override
    public int compareTo(Pair p) {
        if(p.a + p.b == this.a + this.b) {
            if(p.a == this.a)
                return this.b - p.b;
            return this.a - p.a;
        }
        return (this.a + this.b) - (p.a + p.b);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int k = sc.nextInt();
        int[] arr1 = new int[n];
        int[] arr2 = new int[m];
        for (int i = 0; i < n; i++)
            arr1[i] = sc.nextInt();
        for (int i = 0; i < m; i++)
            arr2[i] = sc.nextInt();
        // Please write your code here.
        PriorityQueue<Pair> pq = new PriorityQueue<>();

        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                pq.add(new Pair(arr1[i], arr2[j]));

        while(k-- > 1) {
            pq.poll();
        }

        Pair result = pq.poll();
        System.out.println(result.a + result.b);
    }
}