<template>
  
    <div
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close text-right" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          <div class="modal-header mt-3 mx-auto">
            <h5 class="modal-title" id="exampleModalLabel">Clase Confirmada</h5>
            
          </div>
          <div class="modal-body">
            <div class="activity">{{activityR}}</div>
            <div class>{{dayNameR}} {{numberR}} {{hourR}} horas</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="butt butt-lg mx-auto">Invitar</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
 export default {
   name: "modal",
   props: ['activityR', 'dayNameR','numberR', 'hourR'],
   data() {
    return {};
  }
};

</script>

<style lang="scss" scoped>
@import "./../css/styles.scss";

.modal-content {
  display: flex;
  margin: 18em auto 0 auto;
  padding: 1em;
  border-radius: 2.6em;
  width: 80%;
  .modal-header {
    border-bottom: none;
  }
  .modal-title {
    font-size: $f3;
    color: $color-secondary;
    padding: 1em 2.2em;
  }
  .modal-dialog {
    top: 20%;
    left: 10%;
    width: 80%;
  }
  .modal-body div{
    font-size:$f2;
  }
  .modal-footer {
    margin: 3em;
    border-top: none;
  }

.close {
  margin: 0;
  span {
    font-size: 3em;
  }
}
}
</style>