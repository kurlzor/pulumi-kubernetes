// *** WARNING: this file was generated by the Pulumi Kubernetes codegen tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputApi from "../../types/input";
import * as outputApi from "../../types/output";

    /**
     * TokenReview attempts to authenticate a token to a known user. Note: TokenReview requests may
     * be cached by the webhook token authenticator plugin in the kube-apiserver.
     */
    export class TokenReview extends pulumi.CustomResource {
      /**
       * APIVersion defines the versioned schema of this representation of an object. Servers should
       * convert recognized schemas to the latest internal value, and may reject unrecognized
       * values. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#resources
       */
      public readonly apiVersion: pulumi.Output<"authentication.k8s.io/v1">;

      /**
       * Kind is a string value representing the REST resource this object represents. Servers may
       * infer this from the endpoint the client submits requests to. Cannot be updated. In
       * CamelCase. More info:
       * https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds
       */
      public readonly kind: pulumi.Output<"TokenReview">;

      
      public readonly metadata: pulumi.Output<outputApi.meta.v1.ObjectMeta>;

      /**
       * Spec holds information about the request being evaluated
       */
      public readonly spec: pulumi.Output<outputApi.authentication.v1.TokenReviewSpec>;

      /**
       * Status is filled in by the server and indicates whether the request can be authenticated.
       */
      public readonly status: pulumi.Output<outputApi.authentication.v1.TokenReviewStatus>;

      /**
       * Get the state of an existing `TokenReview` resource, as identified by `id`.
       * Typically this ID  is of the form <namespace>/<name>; if <namespace> is omitted, then (per
       * Kubernetes convention) the ID becomes default/<name>.
       *
       * Pulumi will keep track of this resource using `name` as the Pulumi ID.
       *
       * @param name _Unique_ name used to register this resource with Pulumi.
       * @param id An ID for the Kubernetes resource to retrieve. Takes the form
       *  <namespace>/<name> or <name>.
       * @param opts Uniquely specifies a CustomResource to select.
       */
      public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TokenReview {
          return new TokenReview(name, undefined, { ...opts, id: id });
      }

      public getInputs(): inputApi.authentication.v1.TokenReview { return this.__inputs; }
      private readonly __inputs: inputApi.authentication.v1.TokenReview;

      /**
       * Create a authentication.v1.TokenReview resource with the given unique name, arguments, and options.
       *
       * @param name The _unique_ name of the resource.
       * @param args The arguments to use to populate this resource's properties.
       * @param opts A bag of options that control this resource's behavior.
       */
      constructor(name: string, args?: inputApi.authentication.v1.TokenReview, opts?: pulumi.CustomResourceOptions) {
          let inputs: pulumi.Inputs = {};
          inputs["apiVersion"] = "authentication.k8s.io/v1";
          inputs["kind"] = "TokenReview";
          inputs["metadata"] = args && args.metadata || undefined;
          inputs["spec"] = args && args.spec || undefined;
          inputs["status"] = args && args.status || undefined;
          super("kubernetes:authentication.k8s.io/v1:TokenReview", name, inputs, opts);
          this.__inputs = <any>args;
      }
    }
