<template>
  <div class="my-login">
    <div class="from-box">
      <h2>用户登录</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        :label-position="labelPosition"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="my-loginbtn" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 9, message: "长度在 3 到 9 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$axios
            .post("login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password
            })
            .then(res => {
              if (res.data.meta.status == 200) {
                this.$message.success("登陆成功");
                this.$router.push("/index");
              } else {
                this.$message.error("登陆失败");
                return false;
              }
            });
        } else {
          this.$message.error("登陆失败");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.my-login {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  .from-box {
    width: 500px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;

    h2 {
      margin-bottom: 30px;
    }

    .my-loginbtn {
      width: 100%;
    }
  }
}
</style>