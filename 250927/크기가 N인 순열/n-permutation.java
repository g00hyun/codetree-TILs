import java.util.*;

public class Main {
    static int n;
    static boolean[] visited;
    static List<Integer> list = new ArrayList<>();

    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        visited = new boolean[n+1];
        Backtracking();
    }

    private static void Backtracking() {
        if(list.size() == n) {
            list.forEach(v -> System.out.print(v + " "));
            System.out.println();
            return;
        }

        for(int i = 1; i<=n; i++) {
            if(visited[i]) continue;

            visited[i] = true;
            list.add(i);
            Backtracking();
            list.remove(list.size() - 1);
            visited[i] = false;
        }
    }
}