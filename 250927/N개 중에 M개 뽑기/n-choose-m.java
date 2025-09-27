import java.util.*;

public class Main {
    static int n,m;
    static List<Integer> list = new ArrayList<>();

    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        m = sc.nextInt();

        Backtracking(1);
    }

    private static void Backtracking(int start) {
        if(list.size() == m) {
            list.forEach(v -> System.out.print(v + " "));
            System.out.println();
            return;
        }

        for(int i = start; i<=n; i++) {
            list.add(i);
            Backtracking(i + 1);
            list.remove(list.size() - 1);
        }
    }
}