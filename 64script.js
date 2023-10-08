
<script>
      class MultiplicatorUnitFailure extends Error {
        constructor(message) {
          super(message);
          this.name = "MultiplicatorUnitFailure";
        }
      }

      function primitiveMultiply(a, b) {
        if (Math.random() < 0.2) {
          return a * b;
        } else {
          throw new MultiplicatorUnitFailure("Multiplication failed");
        }
      }

      function reliableMultiply(a, b) {
        let attempts = 1;
        while (true) {
          try {
            return primitiveMultiply(a, b);
          } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) {
              throw error; // Rethrow if it's not a MultiplicatorUnitFailure
            }
            attempts++;
          }
        }
      }
      
      console.log(reliableMultiply(8, 8)); // Output: → 64
    </script>
