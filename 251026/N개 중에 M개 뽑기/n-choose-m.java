import java.util.*;

public class Main {
    static int n,m;
    static List<Integer> answer = new ArrayList<>();

    public static void main(String[] args) {
        // Please write your code here.
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt(); m = sc.nextInt();

        Backtracking(1, 0);
    }

    private static void Backtracking(int start, int cur) {
        if(cur == m) {
            for(int i : answer)
                System.out.print(i + " ");
            System.out.println();
            return;
        }

        for(int i = start; i<=n; i++) {
            answer.add(i);
            Backtracking(i+1, cur+1);
            answer.remove(answer.size() - 1);
        }
    }
}